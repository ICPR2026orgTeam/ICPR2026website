import yaml
from pathlib import Path
from datetime import datetime

with open("_data/sessionsPaperID.yml", "r") as f:
    sessions = yaml.safe_load(f)
today = datetime.now().strftime("%d/%m/%Y")

for session in sessions:
    slug = f"oral{session['sessionId']}{session['codePlace']}"

    content = f"""---
layout: sessionPageTemplate
last_modified: {today}
---
"""

    Path(f"_sessions/{slug}.md").write_text(content)
