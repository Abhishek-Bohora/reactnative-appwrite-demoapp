import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite";

// this needs to come from env varibles
export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.abhi.mytestapp",
  projectId: "666c480b001132af4601",
  databaseId: "666c591b001b1aec54d5",
  userCollectionId: "666c593f003e1773e905",
};

const client = new Client();
client.setEndpoint(config.endpoint);
client.setProject(config.projectId);
client.setPlatform(config.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!newAccount) {
      throw error;
    }

    const avatarUrl = avatars.getInitials(newAccount);
    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );
    console.log(newUser);
    return newUser;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
