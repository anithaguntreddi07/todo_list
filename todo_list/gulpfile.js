const gulp = require('gulp');
const electronInstaller = require('electron-winstaller');

gulp.task('create-winstaller', function (done) {
    electronInstaller.createWindowsInstaller({
        appDirectory: './release-builds/todo_list-win32-ia32', // Update to your actual app directory
        outputDirectory: './release',
        arch: 'ia32', // Or 'x64' if you are targeting 64-bit
        authors: "anitha_guntreddi",
        version: "2.0.0",
        iconUrl: "favicon.ico", // URL for the icon
        setupIcon: "C:\\Users\\LAB9\\Desktop\\todo_list\\favicon.ico", // Path to your icon file
        loadingGif: "C:\\Users\\LAB9\\Desktop\\todo_list\\ele.gif", // Path to your loading gif
        noMsi: true
    })
    .then(() => {
        console.log('Installer created successfully!');
        done();
    })
    .catch((err) => {
        console.log(`Error creating installer: ${err.message}`);
        done(err);
    });
});
