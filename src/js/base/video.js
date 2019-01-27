const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');

const video = document.getElementById('video');
const url = 'http://182.254.48.146/om.tc.qq.com/AqqUbhxAUPKx7OD-qpIrXFY380bXJUZXV9zMBL67muSI/b0617s6pgyh.p701.1.mp4?sha=454AEDB4D6A2FB89D07C2ADE15E880BA8C5A5130&sdtfrom=v1105&guid=76635c331584f6b3676c60b7b61fa6cc&vkey=7F68FC9030BDE5C2C9FCF3C32DB7D659A70E3D4AEA48593F2A1B01FBD7FEF3216125B6F2EA381A57B461A979AB0ECA6C0E7F0AA5462515ED7E3FAA4A3F480846D955CD682A4F6D68B9E51180747714F2DEA61B1750B7F03F4A254C3FC683AA51D618F18C36D39AD54B36CAF49C28164488835AADE2C6A078&ocid=488379564&ocid=2203194796&ocid=2928833892';

function animate() {
  if (!video.ended) {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    window.raf = window.requestAnimationFrame(animate);
  }
}

export function init() {
  video.play();
  window.raf = window.requestAnimationFrame(animate);
}