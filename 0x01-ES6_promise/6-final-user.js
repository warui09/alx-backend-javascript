import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  signUpUser(firstName, lastName)
    .then((user) => uploadPhoto(fileName).then((photo) => [{ status: user.status, value: 'value or error returned by the Promise' }, { status: photo.status, value: 'value or error returned by the Promise' }]))
    .catch((err) => console.log(err));
}
