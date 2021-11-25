import { Text, Spinner } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import Main from "../layouts/Main";
import { UserContext } from "../contexts/UserContext";
import { FirebaseCtx } from "../contexts/FirebaseContext";
import ProfileDetails from "../components/ProfileDetails";

const Profile: React.FC = () => {
  const { state, actions } = useContext(UserContext);

  const { storage, db } = useContext(FirebaseCtx);

  const [image, setImage] = useState<any>(null);

  const [url, setUrl] = useState();

  const [progress, setProgress] = useState(0);

  const handleChange = (e: any) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  useEffect(() => {
    if (state.userId) {
      actions.getUser(state.userId);
    }
  }, []);

  const handleUpload = (image: any) => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    );
  };

  useEffect(() => {
    if (url && url !== undefined) {
      const insertImageOnDatabase = async () =>
        await db
          .collection("users")
          .doc(state.userId)
          .set({ ...state.user, image: url });
      insertImageOnDatabase();
    }
    if (url !== undefined && image !== null) {
      setTimeout(function () {
        window.location.reload();
      }, 2000);
    }
  }, [url]);

  return (
    <Main>
      <Text
        as="h1"
        textStyle="h1"
        textAlign="center"
        pb={16}
        fontFamily="roboto"
      >
        Profile
      </Text>
      {state.user ? (
        <ProfileDetails
          handleUpload={() => handleUpload(image)}
          user={state.user}
          progress={progress}
          handleChange={handleChange}
        />
      ) : (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="orange.500"
          size="xl"
        />
      )}
    </Main>
  );
};

export default Profile;
