'use strict';

const { runWatch } = require('../../utils/test-utils');

describe('stats and watch', () => {
    it('should not log stats with the "none" value from the configuration', async () => {
        const { stderr, stdout } = await runWatch(__dirname, ['-c', './webpack.config.js', '--color']);

        expect(stderr).toBeFalsy();
        expect(stdout).toBeTruthy();
    });

    it('should not log stats with the "none" value from the configuration and multi compiler mode', async () => {
        const { stderr, stdout } = await runWatch(__dirname, ['-c', './multi-webpack.config.js', '--color']);

        expect(stderr).toBeFalsy();
        expect(stdout).toBeTruthy();
    });

    it('should log stats with the "normal" value in arguments', async () => {
        const { stderr, stdout } = await runWatch(__dirname, ['-c', './webpack.config.js', '--stats', 'normal', '--color']);

        expect(stderr).toBeFalsy();
        expect(stdout).toBeTruthy();
    });
});
