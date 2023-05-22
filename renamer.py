import os

def rename_files(folder_path):
    files = os.listdir(folder_path)
    files.sort()  # Sort files alphabetically


    for i, file_name in enumerate(files):
        # Construct new file name
        file_extension = os.path.splitext(file_name)[1]
        new_file_name = f"pg{i+1}{file_extension}"  # e.g., 001.jpg, 002.jpg, ...

        # Rename the file
        old_file_path = os.path.join(folder_path, file_name)
        new_file_path = os.path.join(folder_path, new_file_name)
        os.rename(old_file_path, new_file_path)

        print(f"Renamed {file_name} to {new_file_name}")

# Specify the folder path where the files are located
folder_path = "img\\comics\\rat_boy_diaries\\hourlies_23"

# Call the function to rename the files in the specified folder
rename_files(folder_path)