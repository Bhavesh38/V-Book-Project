import React, { useEffect, useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import "bootstrap/dist/css/bootstrap.min.css";
useEffect(() => {
	const script = document.createElement("script");

	script.src = "/test.js";
	script.async = true;

	document.body.appendChild(script);

	return () => {
		document.body.removeChild(script);
	};
}, []);
