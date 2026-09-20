function escape(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function highlight(value: string) {
  const safe = escape(value);
  return safe
    .replace(/(\/\/.*|#.*)$/gm, '<span class="tok-comment">$1</span>')
    .replace(/(&quot;.*?&quot;|&#39;.*?&#39;|`.*?`)/g, '<span class="tok-string">$1</span>')
    .replace(/\b(const|let|var|return|import|from|if|throw|export|def|class|print|async|await|new|true|false)\b/g, '<span class="tok-keyword">$1</span>');
}

export function CodeBlock({ children, label }: { children: string; label?: string }) {
  return <div className="code-wrap">{label && <div className="code-label">{label}</div>}<pre><code dangerouslySetInnerHTML={{ __html: highlight(children) }} /></pre></div>;
}
