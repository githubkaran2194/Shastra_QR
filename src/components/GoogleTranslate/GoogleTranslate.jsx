import { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    // Define the global function
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,mr",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    // Load the Google Translate script dynamically
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: Remove script and translation element
      document.body.removeChild(script);
      const translateElement = document.getElementById("google_translate_element");
      if (translateElement) translateElement.innerHTML = "";
    };
  }, []);

  return (
    <div>
      <div id="google_translate_element"></div>
    </div>
  );
};

export default GoogleTranslate;
