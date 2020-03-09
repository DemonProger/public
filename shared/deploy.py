
import subprocess
import os
import shutil
import webbrowser


def copyFolder(src, dst, symlinks=False, ignore=None):
    for item in os.listdir(src):
        s = os.path.join(src, item)
        d = os.path.join(dst, item)
        if os.path.isdir(s):
            shutil.copytree(s, d, symlinks, ignore)
        else:
            shutil.copy2(s, d)


def removeFolderContent(folder):
    for root, dirs, files in os.walk(folder):
        for f in files:
            os.unlink(os.path.join(root, f))
        for d in dirs:
            shutil.rmtree(os.path.join(root, d))


# configs
FRONTEND_BUILD_FOLDER = "../frontend/build"
BACK_PUBLIC_FOLDER = "../backend/public"
SITE_URL = "http://localhost:3000"

# tasks
BUILD_FRONTEND = True
RUN_DEV_SERVER = False # True
COPY_FRONTEND = True
BUILD_BACK = True
RUN_BACK = True
OPEN_FRONT = True


print(f"Frontend build folder: {FRONTEND_BUILD_FOLDER}")
print(f"Back public folder: {BACK_PUBLIC_FOLDER}")


if BUILD_FRONTEND:
    print(f"Building frontend...")
    subprocess.check_output(["npm", "run-script", "build", "--prefix", "../frontend"])

if COPY_FRONTEND:
    print(f"Front copying...")
    removeFolderContent(BACK_PUBLIC_FOLDER)
    copyFolder(FRONTEND_BUILD_FOLDER, BACK_PUBLIC_FOLDER)    

if BUILD_BACK:
    print(f"Building back...")
    subprocess.check_output(["npm", "build", "--prefix", "../backend"])

if RUN_BACK:
    print(f"Running back...")
    subprocess.check_output(["npm", "run", "--prefix", "../backend"])

if OPEN_FRONT:
    print(f"Opening from in browser...")
    webbrowser.open_new(SITE_URL)

if RUN_DEV_SERVER:
    print(f"Running dev-server...")
    subprocess.check_output(["npm", "start", "--prefix", "../frontend"])