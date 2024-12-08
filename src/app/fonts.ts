import localFont from "next/font/local";

export const butler = localFont({
    src: [
        {   path:"./fonts/Butler.woff",
            weight: "400",
            style: "normal",
        }
    ],
    variable: "--font-butler",
 
});

export const ralewayRegular = localFont({
    src: [
        {   path:"./fonts/Raleway-Regular.woff",
            weight: "400",
            style: "normal",
        }
    ],
    variable: "--font-Raleway",
});