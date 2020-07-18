/*!
 * Ext JS Library 4.0
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

Ext.define('MyDesktop.Kelurahan', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
        'Ext.data.Store',
        'Ext.data.proxy.Rest',
        'Ext.util.Format',
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer',
        'Ext.form.Panel'

    ],

    id:'kelurahanGrid',

    init : function(){
        this.launcher = {
            text: 'Kelurahan',
            iconCls:'icon-grid'
        };
    },

    createWindow : function(){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('kelurahanGrid');
        if(!win){
            win = desktop.createWindow({
                id: 'kelurahanGrid',
                title:'Data Kelurahan',
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
                        autoFocus: true,
                        store: Ext.create('Ext.data.Store', {
                            autoLoad: true,
                            fields: [
                               { name: 'kode_kelurahan', type: 'string' },
                               { name: 'kode_kecamatan', type: 'string' },
                               { name: 'nama_kelurahan', type: 'string' }
                             
                            ],
                            proxy: {
                                type: 'ajax',
                                url: 'http://localhost:4000/api/kelurahan',
                                reader: {
                                    type: 'json',
                                    root: 'kelurahan'
                                }
                            },
                        }),
                        columns: [
                            new Ext.grid.RowNumberer(),
                            {
                                text: "Kode Kelurahan",
                                flex: 1,
                                sortable: true,
                                dataIndex: 'kode_kelurahan'
                            },
                            {
                                text: "Kode Kecamatan",
                                flex: 1,
                                sortable: true,
                                dataIndex: 'kode_kecamatan'
                            },
                            {
                                text: "Nama Kelurahan",
                                flex: 1,
                                sortable: true,
                                dataIndex: 'nama_kelurahan'
                            },
                            
                               
                              
                        
                        ],
                        listeners: {
                            dblclick : {
                                fn: function(e, t) {
                                   var form = Ext.create('Ext.form.Panel', {
                                            extend: 'Ext.form.Panel',
                                            bodyPadding: 10,
                                            width: 500,
                                            height:500,
                                            items: [{
                                                xtype: 'textfield',
                                                name: 'fld',
                                                fieldLabel: 'Fld Label',
                                                width: 200,
                                                allowBlank: false,
                                                autoFocus: true,
                                               
                                            }],
                                
                                           
                                        });
                    
                                
                                        Ext.create('Ext.window.Window', {
                                            title: 'Window',
                                            modal: true,
                                            floating: true,
                                            closable: true,
                                            closeAction: 'destroy',
                                            draggable: true,
                                            resizable: true,
                                            layout: 'fit',
                                            shadow: true,
                                            items: [form]
                                
                                        }).show().center();

                                    
                                 
                                },

                                element: 'el',
                                scope: this,
                            }    
                        },
                        
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

