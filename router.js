const stages = {
    codeRenderView: {
        'stage0' : require('./components/layout/gameView/stages/Tutorial'),
        'stage1' : require('./components/layout/gameView/stages/StageOne')
    },
    userConsole : {
        'stage0' : require('./components/layout/console/userConsole/UCTutorial'),
        'stage1' : require('./components/layout/console/userConsole/UCStageOne'),
    }
}

export default stages;
