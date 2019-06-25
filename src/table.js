import React from 'react';

export const RepoTable = (props) => {
    let repoTable = (
    <table>
        <thead>
            <tr>
                <th>Full Name:</th>
                <th>Stars: </th>
                <th>Link: </th>
            </tr>
        </thead>
        <tbody>
            {(props.arr).map(item => {
                return(
                <tr key={ item[2] }>
                    <td>{ item[0] }</td>
                    <td>{ item[1] }</td>
                    <td>{ item[2] }</td>
                </tr>)
            })}
        </tbody>
    </table>
    );
    return repoTable;
}