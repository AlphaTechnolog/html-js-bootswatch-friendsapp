const toggleAddForm = () => {
  const addFormEl = document.querySelector("#addForm");
  const addFriendButton = document.querySelector("#addFriend");
  addFormEl.hidden = !addFormEl.hidden;
  addFriendButton.innerHTML = addFormEl.hidden ? "Add friend" : "Close add friend form"
  document.addForm.reset();
};

const toggleEditForm = () => {
  const editFormEl = document.querySelector("#editForm");
  const appEl = document.getElementById("app");
  editFormEl.hidden = !editFormEl.hidden;
  appEl.hidden = !!!editFormEl.hidden;
  document.editForm.reset();
};

const addFriend = () => toggleAddForm();

document.addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const [name, phone, email] = ["name", "phone", "email"].map((item, idx) => (
    e.target[item].value
  ));

  e.target.reset();
  toggleAddForm();
  pushFriend({ name, phone, email });
  refreshFriends();
});

const deleteFriend = (id) => {
  if (confirm("Do you want to remove this friend?")) {
    removeFriend(id);
    refreshFriends();
  }
};

const deleteAllFriends = () => {
  if (confirm("Do you want to remove all friends?")) {
    removeAllFriends();
    refreshFriends();
  }
};

const editFriend = (id) => {
  localStorage.setItem('id', JSON.stringify(id));
  const friend = fetchFriend(id);

  const [title, name, phone, email] = [
    "editForm->name",
    "editForm->name->input",
    "editForm->phone->input",
    "editForm->email->input"
  ].map((item) => document.getElementById(item));

  toggleEditForm();
  title.innerHTML = friend.name;
  name.value = friend.name;
  phone.value = friend.phone;
  email.value = friend.email;
}

document.editForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const [name, phone, email] = ["name", 'phone', 'email'].map((item) => (
    e.target[item].value
  ));

  const id = parseInt(localStorage.getItem('id'));
  localStorage.removeItem('id');
  updateFriend(id, name, phone, email);
  toggleEditForm();
  refreshFriends();
});

refreshFriends();
