import yaml
from pathlib import Path

with open("_data/sessionsPaperID.yml", "r") as f:
    sessions = yaml.safe_load(f)

for session in sessions:
    slug = f"oral{session['sessionId']}"

    content = f"""---
layout: sessionPageTemplate
---
"""

    Path(f"_sessions/{slug}.md").write_text(content)
