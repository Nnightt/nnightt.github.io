// 提交表单功能
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("response-message").textContent = "感谢你的消息！";
});
