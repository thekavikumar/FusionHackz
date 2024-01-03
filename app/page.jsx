"use client";
import Homepage from "@/components/Homepage";

export default function Home() {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="bg-[#B9ECFD] w-full">
      <Homepage />;
    </div>
  );
}
