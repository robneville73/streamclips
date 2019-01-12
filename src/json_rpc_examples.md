## get all sources in order to associate name with sourceId
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getSources",
    "params": {
        "resource": "SourcesService"
    }
}
{
    "_type": "HELPER",
    "resourceId": "Source[\"browser_source_03871caf-95e5-4f5e-be65-1710b8b9ea8c\"]",
    "sourceId": "browser_source_03871caf-95e5-4f5e-be65-1710b8b9ea8c",
    "name": "sc_killshot2",
    "type": "browser_source",
    "propertiesManagerType": "default",
    "audio": false,
    "video": true,
    "async": false,
    "doNotDuplicate": true,
    "width": 800,
    "height": 600,
    "muted": false,
    "id": "browser_source_03871caf-95e5-4f5e-be65-1710b8b9ea8c"
}

## get scene item and then mess with visibility
{
    "jsonrpc": "2.0",
    "id": 8,
    "method": "activeScene",
    "params": {
        "resource": "ScenesService"
    }
}

{
    "sceneItemId": "76742890-28cb-4e65-995a-38011f45b243",
    "sourceId": "browser_source_03871caf-95e5-4f5e-be65-1710b8b9ea8c",
    "obsSceneItemId": 2,
    "id": "76742890-28cb-4e65-995a-38011f45b243",
    "parentId": "",
    "sceneNodeType": "item",
    "sceneId": "scene_dd659404-5a9e-4227-8e19-a711e12357e6",
    "resourceId": "SceneItem[\"scene_dd659404-5a9e-4227-8e19-a711e12357e6\",\"76742890-28cb-4e65-995a-38011f45b243\",\"browser_source_03871caf-95e5-4f5e-be65-1710b8b9ea8c\"]",
    "transform": ⊕{...},
    "visible": false,
    "locked": false
}

{
    "jsonrpc": "2.0",
    "id": 8,
    "method": "setVisibility",
    "params": {
        "resource": "SceneItem[\"scene_dd659404-5a9e-4227-8e19-a711e12357e6\",\"76742890-28cb-4e65-995a-38011f45b243\",\"browser_source_03871caf-95e5-4f5e-be65-1710b8b9ea8c\"]",
        "args": [false]
    }
}