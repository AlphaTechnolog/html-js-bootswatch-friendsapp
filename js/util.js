const getFriends = () => {
  const data = JSON.parse(localStorage.getItem("friends"));
  return data ? data : [];
};

const renderFriends = (friends, friendsEl) => {
  for (const friend of friends) {
    friendsEl.innerHTML += `
      <tr>
        <td>${friend.name}</td>
        <td>${friend.phone}</td>
        <td>${friend.email}</td>
        <td>
          <button
            class="btn btn-danger my-1"
            onclick="deleteFriend(${friend.id})"
          >
            Delete
          </button>

          <button
            class="btn btn-warning my-1"
            onclick="editFriend(${friend.id})"
          >
            Edit
          </button>
        </td>
      </tr>
    `
  }
};

const refreshFriends = () => {
  const friends = getFriends();
  const friendsEl = document.querySelector("#friends");
  friendsEl.innerHTML = "";

  if (friends.length === 0) {
    friendsEl.innerHTML = `
      <tr>
        <td colspan="4">
          Don't have friends to show.
        </td>
      </tr>
    `
  } else {
    renderFriends(friends, friendsEl);
  }
};

const pushFriend = (friend) => {
  const friends = getFriends();
  friend = { id: uuid(), ...friend };
  localStorage.setItem("friends", JSON.stringify([friend, ...friends]));
};

const removeFriend = (id) => {
  const friends = getFriends().filter((friend) => friend.id !== id);
  localStorage.setItem("friends", JSON.stringify(friends));
};

const removeAllFriends = () => localStorage.clear();
const fetchFriend = (id) => getFriends().find((friend) => friend.id === id);

const updateFriend = (id, name, phone, email) => {
  let friend = fetchFriend(id);
  friend.name = name;
  friend.phone = phone;
  friend.email = email;
  const friends = getFriends().map((f) => (
    f.id === friend.id ? friend : f
  ));
  localStorage.setItem("friends", JSON.stringify(friends));
};
