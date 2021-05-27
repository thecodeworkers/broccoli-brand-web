const _valueSelection = (node: any, select: string) => {
    switch (select) {
        case 'outstanding':
            return node['post']['outstanding']
        default:
            return node[select]
    }
}

export const Filter = (nodes: Array<any>, filter, selection: string) => {

    const nodeFilter = (node) => {
        let validation = true
        let validFilter = false
        let select = _valueSelection(node, selection)
        if (typeof select == 'boolean') validFilter = select === filter
        return validation && validFilter
    }

    return (filter) ? nodes.filter(nodeFilter) : nodes
}
