// ESLint giving regenerator-runtime error because of regenerator-runtime's poor transpiled performance but this code is not going to work on browsers. So i think we can ignore it.
// If you are asking about why I'm insisting about for-of loop: Handling throwed exceptions inside foreach-map loop is hard and we are not able to break foreach-map loops.

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
  // Editing a referenced object(or array) is a little bit dangerous so i'm not going to edit it directly instead i cloned it to a new variable.
  const newList = [...list];
  let sourceFile: File | undefined;
  let destFolderIndex: number | undefined;
  for (const [folderN, folder] of list.entries()) {
    if (folder.id === source) throw new Error('You cannot move a folder');
    for (const [fileN, file] of folder.files.entries()) {
      if (file.id === destination) throw new Error('You cannot specify a file as the destination');
      if (file.id === source) [sourceFile] = newList[folderN].files.splice(fileN, 1);
    }
    if (folder.id === destination) destFolderIndex = folderN;
    if (sourceFile && destFolderIndex) break;
  }
  if (!sourceFile) throw new Error('Source file is not found');
  if (!destFolderIndex) throw new Error('Destination folder is not found');
  newList[destFolderIndex].files.push(sourceFile);
  return newList;
}
