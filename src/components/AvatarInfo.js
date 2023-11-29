class AvatarInfo{
  constructor({avatarSelector}) {
    this._avatarElement = document.querySelector(avatarSelector);
  }

  updateAvatarInfo(avatar) {
    this._avatarElement.setAttribute("src", avatar);
  }
}

export default AvatarInfo;