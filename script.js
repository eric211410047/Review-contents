// 預設的筆記內容
const defaultNotes = {
    chapter1: [
        {
            id: 1,
            text: "方向 1 - 很像人的思考(Thinking Humanly)：讓 AI 模仿人類的內在思考過程，包括記憶、情感、推理、決策、思考、學習等。"
        },
        {
            id: 2,
            text: "方向 2 - 很像人的行動(Acting Humanly)：讓 AI 模仿人類一般的行動。圖靈測試需要六個關鍵能力：自然語言處理、知識表示、自動推理、機器學習、計算機視覺與語音識別、機器人學。"
        },
        {
            id: 3,
            text: "方向 3 - 合理思考(Thinking Rationally)：AI 基於邏輯與數學推理方法進行正確的思考，例如基本推理技巧中的「Entail」、專家系統。"
        },
        {
            id: 4,
            text: "方向 4 - 合理行動(Acting Rationally)：有理性行動表現的智慧機器(Agent)。專注於讓 AI 達成最優目標的行動，比起像人更注重形式化的定義和標準。"
        },
        {
            id: 5,
            text: "最適合入門者研究的方向：方向四(合理行動)，原因：1) 有許多成熟的現有技術 2) 設計完成特定任務目標的代理(Agent)更直觀 3) 不需要模仿人類思維或行為"
        }
    ],
    chapter2: [
        {
            id: 6,
            text: "簡單反射型智慧體(Simple Reflex Agent)：執行器加上條件-行為規則，事先準備許多 rules，根據條件符合當前知覺狀態的規則而行動。"
        },
        {
            id: 7,
            text: "基於模型反射型智慧體(Model-based Reflex Agent)：包含感測器理念，並具有內部狀態變化、世界模型變化、認識自己已進行的行為等特性。"
        },
        {
            id: 8,
            text: "基於模型的反射型代理人會記錄世界(環境)的演變狀態，使用內部模型追蹤記錄世界的當前狀態，然後採用與反射型代理人類似的方式選擇行動。"
        },
        {
            id: 9,
            text: "兩種結構的主要差別：反射型 agent 會根據已準備好的條件-規則立即反應；model based agent 除了條件-規則外，還會記錄狀態並儲存以前觀察到的信息，可以推斷當前狀態的未觀察到的面向。"
        }
    ],
    chapter3: [
        {
            id: 10,
            text: "環境設定：單一直路公園，隨機格子中會有食物和水"
        },
        {
            id: 11,
            text: "盲狗基本需求 - Percept（感知）：1) Feel Food 2) Feel Water 3) Feel Nothing"
        },
        {
            id: 12,
            text: "盲狗基本需求 - Action（行動）：1) eat 2) drink 3) move down"
        },
        {
            id: 13,
            text: "AI 程度評估：此為簡單反射型 Agent，只具有最低的 AI 程度，因為只會往單一方向移動"
        },
        {
            id: 14,
            text: "改進方案 1：增加回頭功能 - 當走到底時可以回頭，避免錯過後來出現的食物和水"
        },
        {
            id: 15,
            text: "改進方案 2：擴展到 2D 環境，增加移動方向的選擇"
        },
        {
            id: 16,
            text: "改進方案 3：添加記憶功能，記住曾經發現食物和水的位置"
        },
        {
            id: 17,
            text: "改進方案 4：增加感應範圍，提高發現資源的能力"
        }
    ],
    chapter4: [
        {
            id: 18,
            text: "問題正規化 - State：三個水壺內的水量 [x, y, z]"
        },
        {
            id: 19,
            text: "問題正規化 - Initial state：初始狀態 [0, 0, 0]"
        },
        {
            id: 20,
            text: "問題正規化 - Action：1) 倒滿水 2) 倒入其他水壺 3) 全倒在地上"
        },
        {
            id: 21,
            text: "問題正規化 - Transition model：a) 倒滿：[3,y,z], [x,7,z], [x,y,13] b) 倒空：[0,y,z], [x,0,z], [x,y,0] c) 倒入其他水壺：x的水壺改為min((x+y), x最大容量)"
        },
        {
            id: 22,
            text: "問題正規化 - Goal test：得到4單位水在任一水壺 [4,y,z] 或 [x,4,z] 或 [x,y,4]"
        },
        {
            id: 23,
            text: "問題正規化 - Path cost：執行倒水的次數"
        },
        {
            id: 24,
            text: "解決方案（3步）：步驟0: [0,0,0] → 步驟1: [0,7,0] → 步驟2: [3,4,0]"
        },
        {
            id: 25,
            text: "Simple-Problem-solving agent 四個階段：1) 目標設定 2) 問題形式化 3) 搜尋 4) 執行"
        },
        {
            id: 26,
            text: "最佳化問題：目標調整為不僅要測量4L水，還要以最少的水浪費量達成目標"
        }
    ],
    chapter5: [
        {
            id: 27,
            text: "完備性(Completeness)：當問題有解時，算法是否保證能找到一個解"
        },
        {
            id: 28,
            text: "最優性(Optimality)：算法是否能找到一個最優解（路徑耗散函數值最小的路徑）"
        },
        {
            id: 29,
            text: "時間複雜性(Time complexity)：找到一個解需要花費多少時間"
        },
        {
            id: 30,
            text: "空間複雜性(Space complexity)：在搜尋過程中需要佔用多少記憶體(內存)"
        }
    ]
};

// 從本地存儲加載筆記，如果沒有則使用預設筆記
let notes = JSON.parse(localStorage.getItem('notes')) || defaultNotes;

// 新增筆記（需要指定章節）
function addNote() {
    const input = document.getElementById('noteInput');
    const noteText = input.value.trim();
    
    if (noteText) {
        // 預設添加到第一章
        notes.chapter1.push({
            id: Date.now(),
            text: noteText
        });
        saveNotes();
        renderAllNotes();
        input.value = '';
    }
}

// 刪除筆記
function deleteNote(chapter, id) {
    notes[chapter] = notes[chapter].filter(note => note.id !== id);
    saveNotes();
    renderAllNotes();
}

// 保存筆記到本地存儲
function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
}

// 渲染所有章節的筆記列表
function renderAllNotes() {
    renderChapterNotes('chapter1', 'chapter1List');
    renderChapterNotes('chapter2', 'chapter2List');
    renderChapterNotes('chapter3', 'chapter3List');
    renderChapterNotes('chapter4', 'chapter4List');
    renderChapterNotes('chapter5', 'chapter5List');
}

// 渲染特定章節的筆記列表
function renderChapterNotes(chapter, listId) {
    const notesList = document.getElementById(listId);
    notesList.innerHTML = '';
    
    notes[chapter].forEach(note => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${note.text}
            <button class="delete-btn" onclick="deleteNote('${chapter}', ${note.id})">刪除</button>
        `;
        notesList.appendChild(li);
    });
}

// 初始化顯示筆記
renderAllNotes();

// 初始化時如果沒有筆記，則保存預設筆記
if (!localStorage.getItem('notes')) {
    saveNotes();
}

// 添加按下 Enter 鍵新增筆記的功能
document.getElementById('noteInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addNote();
    }
}); 