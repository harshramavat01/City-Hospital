
import { auth } from "../../Firebase";
import { createUserWithEmailAndPassword,  sendEmailVerification,  onAuthStateChanged} from "firebase/auth";



export const SignUpapi = (data) => {

    console.log("SignUpapi",data);
 
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log(user);

                onAuthStateChanged(auth, (user) => {
                    sendEmailVerification(auth.currentUser)

                        .then(() => {
                           resolve({payload : "Check Your Email"});
                        })

                        .catch((e) => {
                            reject({payload : e});
                        })
                });
            })
            .catch((error) => {
                const errorCode = error.code;

                const errorMessage = error.message;

                if (errorCode.localeCompare("auth/email-already-verified") == 0) {
                  reject({payload : "Email Is Already Verified"});                
                } else{
                    reject({payload : errorMessage});
                }


            });

    })

}