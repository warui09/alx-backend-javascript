import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return signUpUser(firstName, lastName)
    .then((user) => uploadPhoto(fileName).then((photo) => [
      { status: user.status, value: user.value },
      { status: photo.status, value: photo.value },
    ]))
    //.catch((err) => console.log(err));
}
