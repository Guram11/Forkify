/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        logo: "2.4rem",
        tranlate: "2px",
        icon: "3.2rem",
        img: "4.6rem",
        128: "32rem",
        max: "100rem",
      },
      boxShadow: {
        1: "0 0.7rem 3rem rgba(97,85,81, 0.1)",
        bookmarks: "0 0.8rem 5rem 2rem rgba(97,85,81, 0.1)",
        modal: "0 4rem 6rem rgba(0, 0, 0, 0.25)",
        container: "0 2rem 6rem 0.5rem rgba(#615551, 0.2)",
      },
      gridTemplateColumns: {
        modal: "1fr 2.8fr",
        container: "1fr 2fr",
      },
      gridTemplateRows: {
        container: "10rem minmax(100rem, auto)",
      },
      borderRadius: {
        container: "9px",
      },
      margin: {
        container: "4vw auto",
      },
      padding: {
        inputY: "1.6rem",
        inputX: "3rem",
        btn: "4rem",
        padXL: "7.5rem",
        pad2XL: "8rem",
      },
      backgroundColor: {
        overlay: "rgba(0, 0, 0, 0.4)",
      },
      fontSize: {
        s: "1.15rem",
        m: "1.4rem",
        l: "1.6rem",
        l3: "1.7rem",
        l2: "2rem",
        xl: "3.25rem",
      },
      letterSpacing: {
        m: "1.1px",
      },
      width: {
        logo: "2.4rem",
        icon: "3.2rem",
        input: "50rem",
        a: "30rem",
        bookmarks: "40rem",
        modal: "100rem",
      },
      minHeight: {
        body: "calc(100vh - 2 * 4vw)",
        container: "117rem",
      },
      maxWidth: {
        container: "120rem",
      },
      lineHeight: {
        m: "1.6",
      },
      fontFamily: {
        body: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        from: "#fbdb89",
        to: "#f48982",
        bg: "#f2efee",
        bgHeader: "#f9f5f3",
        btn: "#786b67",
        input: "#615551",
        placeholder: "#d3c7c3",
        paragraph: "#918581",
        back: "#e0dedd",
      },
    },
  },
  plugins: [],
};
