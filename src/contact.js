

function contactDiv() {
    const contactContainer = document.createElement("div");
    contactContainer.id = "contact-container";

    const contactUsTitle = document.createElement("h3");
    contactUsTitle.id = "contact-us-title";
    contactUsTitle.textContent = "Contact Us";

    const contactUsText = document.createElement("p");
    contactUsText.id = "contact-us-text";
    contactUsText.textContent = "You can find us at: 888 Main St., Liyue Harbor, Teyvat"

    contactContainer.appendChild(contactUsTitle);
    contactContainer.appendChild(contactUsText);

    return contactContainer;
}

function contactPage() {
    const content = document.querySelector("#content");
    content.textContent = "";
    content.appendChild(contactDiv());
}

export default contactPage;