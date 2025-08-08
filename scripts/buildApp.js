const { spawnSync } = require('child_process');

const args = process.argv.slice(2);

const result = spawnSync('d2-app-scripts', ['build', ...args], {
    stdio: 'inherit',
    env: { ...process.env, GENERATE_SOURCEMAP: 'false' },
    shell: true,
});

if (result.status !== 0) {
    process.exit(result.status ?? 1);
}
