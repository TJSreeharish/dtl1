import subprocess

# Define the directories and commands
commands = [
    {"path": r"C:\Users\tjsre\Desktop\dtl3\backend", "command": "npm i && npm start"},
    {"path": r"C:\Users\tjsre\Desktop\dtl3\frontend", "command": "npm i && npm run dev"},
    {"path": r"C:\Users\tjsre\Desktop\dtl3\backend\flask_app", "command": " python app.py"}
]

# Function to run commands in a terminal
def run_command(command, path):
    subprocess.Popen(f'cmd /k "cd {path} && {command}"', shell=True)

# Execute each command
for cmd in commands:
    run_command(cmd["command"], cmd["path"])

print("Commands are running in separate terminals.")
