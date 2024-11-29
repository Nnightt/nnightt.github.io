// 点赞功能
function likeProject(projectId) {
    let likeCount = document.getElementById(`like-count-${projectId}`);
    let currentCount = parseInt(likeCount.textContent);
    likeCount.textContent = currentCount + 1;
}
