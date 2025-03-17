const API_URL = "https://bmbdemo.elvissoftware.com/Auth/Verify";

export const loginUser = async (username, password) => {
    try {
        const response = await fetch(`${API_URL}?UserName=${username}&PassWord=${password}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Invalid credentials or API error");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Login Error:", error);
        return null;
    }
};
