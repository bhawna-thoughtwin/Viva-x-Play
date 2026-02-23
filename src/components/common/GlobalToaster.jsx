import { Toaster } from "react-hot-toast";

const GlobalToaster = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        duration: 3000,
        style: {
          background: "#111",
          color: "#fff",
          fontSize: "14px",
          borderRadius: "8px",
          padding: "12px 16px",
        },
        success: {
          style: {
            background: "#7ed7eb",
            color: "#000",
          },
        },
        error: {
          style: {
            background: "#ff4d4f",
            color: "#fff",
          },
        },
      }}
    />
  );
};

export default GlobalToaster;
