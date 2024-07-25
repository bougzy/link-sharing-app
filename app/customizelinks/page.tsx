"use client"

import React, { useState, useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import LinkForm from "../linkform/page";
import devLogo from "../../public/image/devLogo.png";
import linkAnchor from "../../public/image/linkAnchor.png";
import profileIcon from "../../public/image/profileIcon.png";
import GithubButton from "../github/page";
import YoutubeButton from "../youtube/page";
import { auth, firestore } from "../firebaseconfig/page"; // Import Firebase configuration

const CustomizeLinks: React.FC = () => {
  const [linkForms, setLinkForms] = useState<number[]>([]);
  const [formValidity, setFormValidity] = useState<{ [key: number]: boolean }>({});
  const [formLinks, setFormLinks] = useState<{ [key: number]: { link: string; platform: string } }>({});
  const [phoneFormLinks, setPhoneFormLinks] = useState<{ link: string; platform: string }[]>([]);
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  const handleAddNewLinkClick = () => {
    if (user) {
      const newIndex = linkForms.length;
      setLinkForms([...linkForms, newIndex]);
    } else {
      alert("You must be logged in to add new links.");
    }
  };

  const handleFormSubmit = (index: number, isValid: boolean, link: string, platform: string) => {
    setFormValidity((prev) => ({ ...prev, [index]: isValid }));
    setFormLinks((prev) => ({ ...prev, [index]: { link, platform } }));
  };

  const handleSaveClick = async () => {
    if (!user) {
      alert("You must be logged in to save your links.");
      return;
    }

    // Trigger form submission for each form
    linkForms.forEach((index) => {
      const formElement = document.getElementById(`link-form-${index}`);
      if (formElement) {
        formElement.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
      }
    });

    const allFormsValid = Object.values(formValidity).every((isValid) => isValid);
    if (!allFormsValid) {
      alert("Please correct the errors in the forms.");
    } else {
      console.log("All forms are valid:", formLinks);

      // Populate phone form links only with valid links
      setPhoneFormLinks(
        Object.entries(formLinks)
          .filter(([index, { link, platform }]) => formValidity[Number(index)])
          .map(([index, { link, platform }]) => ({ link, platform }))
      );

      // Save links to Firestore
      try {
        const userLinksRef = firestore.collection('userLinks').doc(user.uid);
        await userLinksRef.set({ links: formLinks });
        alert("Links saved successfully!");
      } catch (error) {
        console.error("Error saving links: ", error);
        alert("Error saving links.");
      }
    }
  };

  const renderButton = (platform: string, link: string) => {
    switch (platform) {
      case "GitHub":
        return <GithubButton link={link} />;
      case "YouTube":
        return <YoutubeButton link={link} />;
      default:
        return null;
    }
  };

  return (
    <div style={{ margin: "0 1.5rem" }}>
      {/* Navigation */}
      <nav className="bg-white mt-3">
        <div className="container mx-auto flex justify-between items-center py-4">
          <a href="#" className="flex items-center" style={{ textDecoration: "none" }}>
            <Image src={devLogo} alt="Devlinks" style={{ marginRight: "1rem" }} />
            <span className="ml-2 text-xl font-semibold text-gray-800">devlinks</span>
          </a>
          <div className="flex-grow flex justify-center">
            <div className="flex items-center space-x-4">
              <a href="#" className="text-indigo-600 bg-indigo-100 hover:bg-indigo-600 px-3 py-2 rounded-md flex items-center" style={{ textDecoration: "none" }}>
                <Image src={linkAnchor} alt="Links" style={{ marginRight: "1rem" }} />
                Links
              </a>
              <a href="#" className="text-gray-500 flex items-center" style={{ textDecoration: "none" }}>
                <Image src={profileIcon} alt="Profile" style={{ marginRight: "1rem" }} />
                Profile Details
              </a>
            </div>
          </div>
          <a href="#" className="text-indigo-600 border border-indigo-600 px-3 py-2 rounded-md bg-indigo-100 hover:bg-indigo-600 hover:text-white transition" style={{ textDecoration: "none" }}>
            Preview
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="min-vh-100 d-flex flex-column justify-content-center bg-light">
        <Row className="justify-content-center">
          <Col xs={12} md={4} lg={5} className="mb-4 mb-md-0 position-relative">
            <div className="bg-white rounded-lg p-14 d-flex flex-column align-items-center position-relative">
              <Image
                src="/image/subtract.png"
                alt="Profile Image"
                width={250}
                height={400}
                className="border rounded-5 p-2"
                style={{ width: "280px" }}
              />
              <div className="position-absolute top-50 start-50 translate-middle phone-form-section">
                <div className="">
                  <Image
                    src=""
                    alt=""
                    className="rounded-circle mx-auto"
                    style={{
                      width: "100px",
                      height: "100px",
                      background: "#EEEEEE",
                    }}
                  />
                  <form className="d-flex flex-column mt-8 align-items-center">
                    <input
                      type="text"
                      className="form-control mb-2 border-none"
                      style={{
                        width: "180px",
                        height: "10px",
                        background: "#EEEEEE",
                      }}
                    />
                    <input
                      type="text"
                      className="form-control mb-2 border-none"
                      style={{
                        width: "120px",
                        height: "2px",
                        background: "#EEEEEE",
                      }}
                    />
                  </form>
                </div>
                {phoneFormLinks.map(({ platform, link }, index) => (
                  <div key={index} className="d-flex flex-column m mt-8 align-items-center">
                    {renderButton(platform, link)}
                  </div>
                ))}
              </div>
            </div>
          </Col>

          <Col xs={12} md={8} lg={7}>
            <div className="bg-white rounded-lg p-11">
              <div className="d-flex flex-column">
                <h2 className="text-2xl font-semibold">Customize your links</h2>
                <p className="mt-2 text-secondary">Add/edit/remove links below and then share all your profiles with the world!</p>
              </div>
              <div className="d-flex justify-content-center mt-4">
                <Button
                  variant="outline-primary"
                  className="w-100"
                  onClick={handleAddNewLinkClick}
                >
                  + Add new link
                </Button>
              </div>
              <div className="link-forms-container mt-3 rounded" style={{ padding: "5px" }}>
                {linkForms.map((_, index) => (
                  <div key={index} className="mb-2">
                    <LinkForm
                      onSubmit={(isValid, link, platform) =>
                        handleFormSubmit(index, isValid, link, platform)
                      }
                    />
                  </div>
                ))}
              </div>
              {linkForms.length === 0 && (
                <div className="d-flex justify-content-center mt-4">
                  <div className="bg-light w-100 p-4">
                    <div className="text-center">
                      <Image
                        src="/image/press.svg"
                        alt="Profile Image"
                        width={250}
                        height={400}
                        className="rounded-lg mx-auto mt-3"
                      />
                      <h3 className="mt-4 text-xl font-semibold">Let's get you started</h3>
                      <p className="mt-2 text-secondary">Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>
                    </div>
                  </div>
                </div>
              )}
              <div className="text-end mt-3">
                <Button onClick={handleSaveClick}>Save</Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CustomizeLinks;
