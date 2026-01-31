// Kazuko no Kai メンバー紹介ページのスクリプト

document.addEventListener("DOMContentLoaded", () => {
    const memberList = document.getElementById("member-list");

    // Fetch the merged JSON data
    fetch("data/members_merged.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load members data");
            }
            return response.json();
        })
        .then(data => {
            // Display each member as a table-like card
            data.forEach(member => {
                const memberCard = document.createElement("div");
                memberCard.className = "member-card";

                memberCard.innerHTML = `
                    <table class="member-table">
                        <tr>
                            <td>${member.会員番号}</td>
                            <td>${member.名前}</td>
                        </tr>
                        <tr>
                            <td>${member.居住地}</td>
                            <td>${member.年齢}</td>
                        </tr>
                        <tr>
                            <td colspan="2">${member.コメント}</td>
                        </tr>
                    </table>
                `;

                memberList.appendChild(memberCard);
            });
        })
        .catch(error => {
            console.error("Error loading members data:", error);
        });
});