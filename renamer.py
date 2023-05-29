import os

def rename_files(folder_path):
    files = os.listdir(folder_path)
    files.sort()

    for i, file_name in enumerate(files):
        file_extension = os.path.splitext(file_name)[1]
        new_file_name = f"pg{i+1}{file_extension}"

        old_file_path = os.path.join(folder_path, file_name)
        new_file_path = os.path.join(folder_path, new_file_name)
        os.rename(old_file_path, new_file_path)

        print(f"Renamed {file_name} to {new_file_name}")

folder_path = "img\\comics\\space_story"
rename_files(folder_path)