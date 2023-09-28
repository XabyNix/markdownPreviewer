import { useState } from "react";
import { marked } from "marked";
import "./App.css";

function App() {
	const [previewText, setPreviewText] = useState<string>("");

	function handleOnChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		setPreviewText(e.currentTarget.value);
	}

	return (
		<div id="container">
			<div className="editorWrapper wrapperStyle">
				<div className="toolbar">
					<h4>Editor</h4>
				</div>
				<textarea
					autoFocus
					id="editor"
					className="style"
					onChange={(e) => handleOnChange(e)}
				></textarea>
			</div>
			<div className="previewWrapper wrapperStyle">
				<div className="toolbar">
					<h4>Preview</h4>
				</div>
				<div
					id="preview"
					className="style"
					dangerouslySetInnerHTML={{
						__html: marked.parse(previewText, {
							breaks: true,
							gfm: true,
						}),
					}}
				></div>
			</div>
		</div>
	);
}

export default App;
