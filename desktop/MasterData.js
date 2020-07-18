/*!
 * Ext JS Library 4.0
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

Ext.define('MyDesktop.MasterData', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
        'Ext.data.Store',
        'Ext.data.proxy.Rest',
        'Ext.util.Format',
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer'
    ],

    id:'masterData',

    init : function(){
        this.launcher = {
            text: 'MasterData',
            iconCls:'icon-grid'
        };
    },

    createWindow : function(){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('masterData');
        if(!win){
            win = desktop.createWindow({
                id: 'masterData',
                title:'Data Npwpd Reklame',
                width:740,
                height:480,
                iconCls: 'icon-grid',
                animCollapse:false,
                constrainHeader:true,
                layout: 'fit',
                items: [
                    {
                        border: false,
                        xtype: 'grid',
                        store: Ext.create('Ext.data.Store', {
                            autoLoad: true,
                            fields: [
                               { name: 'npwpd', type: 'string' },
                               { name: 'no_skpd', type: 'string' },
                               { name: 'no_telp', type: 'string' },
                               { name: 'lokasi_pemasangan', type: 'string' },
                               { name: 'kelurahan', type: 'string' },
                               { name: 'kecamatan', type: 'string' },
                               { name: 'jumlah_unit', type: 'integer' },
                               { name: 'sudut_pandang', type: 'integer' },
                               { name: 'p', type: 'float' },
                               { name: 'l', type: 'float' },
                               { name: 't', type: 'float' },
                               { name: 'jenis_reklame', type: 'string' },
                               { name: 'status_izin', type: 'string' },
                               { name: 'jumlah_sisi', type: 'integer' },
                               { name: 'lama_masa', type: 'string' },
                               { name: 'mp_daritgl', type: 'date' },
                               { name: 'mp_sampaitgl', type: 'date' },
                               { name: 'tgl_skpd', type: 'date' },
                               { name: 'keterangan', type: 'string' },
                               { name: 'kode_lokasi', type: 'string' },
                               { name: 'kode_jenisrek', type: 'string' },
                               { name: 'rokok', type: 'string' },
                               { name: 'nsr', type: 'string' },
                               { name: 'kode_wp', type: 'string' }

                             
                            ],
                            proxy: {
                                type: 'ajax',
                                url: 'http://localhost:4000/api/masterdata',
                                reader: {
                                    type: 'json',
                                    root: 'kelurahan'
                                }
                            },
                        }),
                        columns: [
                            new Ext.grid.RowNumberer(),
                            {
                                text: "NPWPD",
                                flex: 1,
                                sortable: true,
                                dataIndex: 'npwpd'
                            },
                            {
                                text: "No Skpd",
                                flex: 1,
                                sortable: true,
                                dataIndex: 'no_skpd'
                            },
                            {
                                text: "No Telepon",
                                flex: 1,
                                sortable: true,
                                dataIndex: 'no_telp'
                            },
                            {
                                text: "Lokasi Pemasangan",
                                flex: 1,
                                sortable: true,
                                dataIndex: 'lokasi_pemasangan'
                            },
                            {
                                text: "Kelurahan",
                                flex: 1,
                                sortable: true,
                                dataIndex: 'kelurahan'
                            },
                            {
                                text: "Kecamatan",
                                flex: 1,
                                sortable: true,
                                dataIndex: 'kecamatan'
                            },
                            {
                                text: "Jumlah Unit",
                                flex: 1,
                                sortable: true,
                                dataIndex: 'jumlah_unit'
                            },
                            {
                                text: "Sudut Pandang",
                                flex: 1,
                                sortable: true,
                                dataIndex: 'sudut_pandang'
                            },
                            {
                                text: "Panjang",
                                flex: 1,
                                sortable: true,
                                dataIndex: 'p'
                            },
                            {
                                text: "Lebar",
                                flex: 1,
                                sortable: true,
                                dataIndex: 'l'
                            },
                            {
                                text: "Tinggi",
                                flex: 1,
                                sortable: true,
                                dataIndex: 't'
                            },
                            {
                                text: "Jenis Reklame",
                                flex: 1,
                                sortable: true,
                                dataIndex: 'jenis_reklame'
                            },
                            {
                                text: "Status Izin",
                                flex: 1,
                                sortable: true,
                                dataIndex: 'status_izin'
                            },
                            {
                                text: "Jumlah Sisi",
                                flex: 1,
                                sortable: true,
                                dataIndex: 'jumlah_sisi'
                            },
                            {
                                text: "Lama Masa",
                                flex: 1,
                                sortable: true,
                                dataIndex: 'lama_masa'
                            },
                            {
                                text: "Start Tanggal",
                                flex: 1,
                                sortable: true,
                                dataIndex: 'mp_daritgl'
                            },
                            {
                                text: "End Tanggal",
                                flex: 1,
                                sortable: true,
                                dataIndex: 'mp_sampaitgl'
                            },
                            {
                                text: "Tanggal Skpd",
                                flex: 1,
                                sortable: true,
                                dataIndex: 'tgl_skpd'
                            },
                            {
                                text: "Keterangan",
                                flex: 1,
                                sortable: true,
                                dataIndex: 'keterangan'
                            },
                            {
                                text: "Kode Lokasi",
                                flex: 1,
                                sortable: true,
                                dataIndex: 'kode_lokasi'
                            },
                            {
                                text: "Kode Jenis Reklame",
                                flex: 1,
                                sortable: true,
                                dataIndex: 'kode_jenisrek'
                            },
                            {
                                text: "Rokok",
                                flex: 1,
                                sortable: true,
                                dataIndex: 'rokok'
                            },
                            {
                                text: "Nilai Sewa Reklame",
                                flex: 1,
                                sortable: true,
                                dataIndex: 'nsr'
                            },
                            {
                                text: "Kode Wp",
                                flex: 1,
                                sortable: true,
                                dataIndex: 'kode_wp'
                            },

                        ]
                    }
                ],
                tbar:[{
                    text:'Add Something',
                    tooltip:'Add a new row',
                    iconCls:'add'
                }, '-', {
                    text:'Options',
                    tooltip:'Modify options',
                    iconCls:'option'
                },'-',{
                    text:'Remove Something',
                    tooltip:'Remove the selected item',
                    iconCls:'remove'
                }]
            });
        }
        return win;
    },

    
});

