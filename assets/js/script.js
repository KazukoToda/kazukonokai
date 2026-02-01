// Kazuko no Kai メンバー紹介ページのスクリプト

document.addEventListener("DOMContentLoaded", () => {
    const memberList = document.getElementById("member-list");

    const renderMembers = () => {
        memberList.innerHTML = ""; // メンバーリストをクリア
        const isMobile = window.matchMedia("(max-width: 768px)").matches;

        console.log("Fetching members data...");
        fetch("data/members_merged.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to load members data");
                }
                return response.json();
            })
            .then(data => {
                data.forEach(member => {
                    const memberCard = document.createElement("div");
                    memberCard.className = "member-card";

                    if (isMobile) {
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
                    } else {
                        memberCard.innerHTML = `
                            <table class="member-table">
                                <tr>
                                    <td>${member.会員番号}</td>
                                    <td>${member.名前}</td>
                                    <td rowspan="2">${member.コメント}</td>
                                </tr>
                                <tr>
                                    <td>${member.居住地}</td>
                                    <td>${member.年齢}</td>
                                </tr>
                            </table>
                        `;
                    }

                    memberList.appendChild(memberCard);
                });
            })
            .catch(error => {
                console.error("Error loading members data:", error);
            });
    };

    // 初回レンダリング
    renderMembers();

    // リサイズ時に再レンダリング
    window.addEventListener("resize", renderMembers);
});