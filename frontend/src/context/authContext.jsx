import axios from "axios"
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    
    const [linkResetPassword, setLinkResetPassword] = useState(null);
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
      );
    
      const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem("user");
      };
    
    // parse a JSON string and convert it into a JavaScript object.
    const login = async (inputs) => {
        console.log(inputs);
        const res = await axios.post("http://localhost:3000/api/v1/users/login", inputs);

        console.log(res.data);
        if (res.data) {
        setCurrentUser(res.data); //set current user json
        return true;
        } else {
        return false;
        }
    };

    useEffect(() => {
        // local storage must be string
        localStorage.setItem("user", JSON.stringify(currentUser));
      }, [currentUser]);

    //profile image
    // const fetchProfileImage = async () => {
    //     try {
    //     const response = await axios.get(
    //         window.backendURL + `/user/profile-pic/${currentUser.userId}`
    //     );

    //     console.log(response);

    //     if (response.status === 200) {
    //         const imageFilename = await response.data.profilePic;
    //         setProfileImage(imageFilename);
    //     } else {
    //         console.log(`Unexpected response: ${JSON.stringify(response.data)}`);
    //     }
    //     } catch (error) {
    //     console.error("Error fetching profile image:", error.message);
    //     }
    // };
    // useEffect(() => {
    //     fetchProfileImage();
    // }, []);

    return (
        <AuthContext.Provider
          value={{ currentUser, login, logout, linkResetPassword,setLinkResetPassword }}
        >
          {children}
        </AuthContext.Provider>
    );
}