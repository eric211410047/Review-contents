// 載入特定章節的筆記
const notes = JSON.parse(localStorage.getItem('chapter1Notes')) || defaultChapter1Notes;

const defaultChapter1Notes = [
    {
        id: 1,
        text: "方向 1 - 很像人的思考(Thinking Humanly)：讓 AI 模仿人類的內在思考過程，包括記憶、情感、推理、決策、思考、學習等。"
    },
    // ... other notes for chapter 1
];

function addNote() {
    const input = document.getElementById('noteInput');
    const noteText = input.value.trim();
    
    if (noteText) {
        notes.push({
            id: Date.now(),
            text: noteText
        });
        saveNotes();
        renderNotes();
        input.value = '';
    }
}

function deleteNote(id) {
    const index = notes.findIndex(note => note.id === id);
    if (index !== -1) {
        notes.splice(index, 1);
        saveNotes();
        renderNotes();
    }
}

function saveNotes() {
    localStorage.setItem('chapter1Notes', JSON.stringify(notes));
}

function renderNotes() {
    const notesList = document.getElementById('notesList');
    notesList.innerHTML = '';
    
    notes.forEach(note => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${note.text}
            <button class="delete-btn" onclick="deleteNote(${note.id})">刪除</button>
        `;
        notesList.appendChild(li);
    });
}

// 初始化顯示筆記
renderNotes(); 