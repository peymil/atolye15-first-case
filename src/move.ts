type Folder = {
  id: string;
  name: string;
  files: File[];
};
type File = {
  id: string;
  name: string;
};
type List = Folder[];

export default function move(list: List, source: string, destination: string): List {
  const newList = [...list];
  let sourceFile: File | undefined;
  let destFolderIndex: number | undefined;
  list.forEach((folder, folderN) => {
    if (folder.id === source) throw new Error('You cannot move a folder');
    folder.files.forEach((file, fileN) => {
      if (file.id === destination) throw new Error('You cannot specify a file as the destination');
      if (file.id === source) [sourceFile] = newList[folderN].files.splice(fileN, 1);
    });
    if (folder.id === destination) destFolderIndex = folderN;
  });
  if (!sourceFile) throw new Error('Source file is not found');
  if (!destFolderIndex) throw new Error('Destination folder is not found');
  newList[destFolderIndex].files.push(sourceFile);
  return newList;
}
