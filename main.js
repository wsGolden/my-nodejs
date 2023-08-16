import execa from "execa";
export const gitClone = async (

) => {
  console.log(465354)

  try {

    await execa("git", ['status'], {
      cwd: './',
      stdio: ["ignore", "inherit", "inherit"],
    });
  } catch (err) {
    console.log(err)
  }
};
gitClone()