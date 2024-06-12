type graphData = {
    nodes: Object[];
    links: Object[];
}

type NestedObject = {
    [key: string]: any;
};

type Identity = {
    low: number;
    high: number;
};

type Labels = string[];

type Properties = {
    acceptanceDate: string;
    classId: string;
    successor?: string;
    amendedDate: string;
    definedBy: string;
    name: string;
    domainComplete: string;
    category: string | null;
    definitionTypePath: string;
    objectId: string;
    desc: string;
    [key: string]: any; // Allows for additional properties
};

type Field = {
    identity: Identity;
    labels: Labels;
    properties: Properties;
    elementId: string;
};

type FieldLookup = {
    [key: string]: number;
};

type DataObject = {
    keys: string[];
    length: number;
    _fields: Field[];
    _fieldLookup: FieldLookup;
};

type TestData = DataObject[];

export const formatGraphData = (data: any): any => {
    let nodes: Object[] = []
    let links: Object[] = []
    let graphData: graphData = {
        nodes: [],
        links: []
    }

    if (!data) return graphData

    data.forEach((i: {
        _fields: {
            labels: any;
            elementId: any; properties: {
                objectId: any;
                name: any; parentId: any;
            };
        }[];
    }) => {
        // fill nodes
        nodes.push({
            id: i._fields[0].elementId,
            name: i._fields[0].properties.name,
            type: i._fields[0].labels[1]
        })
        // fill links
        links.push({
            source: i._fields[0].elementId,
            target: '4:bbe38368-3d4a-4f0c-971d-5e3ff5f1a337:6002' //i._fields[0].properties.parentId || i._fields[0].properties.objectId
        })
    })

    // set graphData
    graphData.nodes = nodes
    graphData.links = links
    return graphData
}