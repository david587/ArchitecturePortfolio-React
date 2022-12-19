import React from "react";



const ClickScroll = (ref) => {
    ref.current?.scrollIntoView({behavior: "smooth"});
  };

export {ClickScroll};