import React from "react";

export default function LandingPage({ navigate }) {
    return (
        <div>
            <button onClick={() => navigate("/day1")}>day1</button>
            <button onClick={() => navigate("/day2")}>day2</button>
        </div>
    );
}
