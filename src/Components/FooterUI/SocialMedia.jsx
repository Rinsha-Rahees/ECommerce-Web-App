import React from "react";

function SocialMedia() {
  const socialIcons = [
    "src/assets/Socials/facebook.png",
    "src/assets/Socials/instagram.png",
    "src/assets/Socials/pinterest.png",
    "src/assets/Socials/youtube.png",
    "src/assets/Socials/spotify.png"
  ];

  return (
    <>
        {socialIcons.map((icon, idx) => {
            return(
                <button className="w-8 border rounded-full p-1.5 gap-3 hover:border-rose-600">
                <img 
                src={icon} 
                alt="Social Media Icon" 
                className="w-5" 
                />
                </button>
            )
        })}
    </>
    
  );
}

export default SocialMedia;
