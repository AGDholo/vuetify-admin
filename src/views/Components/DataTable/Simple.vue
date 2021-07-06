<template>
  <div>
    <example
      description="Smart editable user forms that automatically enable editable components for all content and call back the required data, greatly improving the user experience."
      title="DataTable(Suspended development)">
      <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        :loading="dataTableLoading"
        show-select
      >
        <template v-slot:header.data-table-select>
          <v-checkbox off-icon="mdi-checkbox-multiple-blank-circle-outline"
                      on-icon="mdi-checkbox-multiple-marked-circle" @click="selectAll()" />
        </template>
        <template v-slot:body="{ items, headers }">
          <tbody>
          <tr v-for="(item,idx) in items" :key="idx" class="h-list_hover">
            <td v-for="(header,key) in headers" :key="key" class="align-center ">
              <v-checkbox v-if="header.value === 'data-table-select'"
                          v-model="selectData"
                          :value="idx"
                          multiple
                          off-icon="mdi-checkbox-blank-circle-outline" on-icon="mdi-checkbox-marked-circle-outline" />

              <v-edit-dialog
                v-else
                :return-value.sync="item[header.value]"
                large
                persistent
                @save="onSave({
                    meta: {column: idx, line: key},
                    data: {origin: items[idx], edit: {value: item[header.value]}}
                    })"
              > {{ item[header.value] }}
                <template v-slot:input>
                  <div class="pt-2">
                    <v-text-field
                      v-model="item[header.value]"
                      dense
                      hide-details
                      label="Edit"
                      outlined
                      single-line
                    ></v-text-field>
                  </div>
                </template>
              </v-edit-dialog>
            </td>
            <td>
              <v-btn color="error" icon>
                <v-icon>mdi-delete-forever-outline</v-icon>
              </v-btn>
            </td>
          </tr>
          </tbody>
        </template>

      </v-data-table>
    </example>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DataTableData from "@/views/Components/DataTable/DataTableData";
import Example from "@/components/document/example.vue";

@Component({
  components: { Example }
})
export default class Datatable extends Vue {
  private headers = DataTableData.headers;

  private desserts = DataTableData.desserts;

  private dataTableLoading = false;


  private selectData: any = [];

  private selectAll() {

    console.log(this.selectData);
  }

  private onSave(info) {
    this.dataTableLoading = true;
    setTimeout(() => this.dataTableLoading = false, 1000);
    alert(`Your edit the info of table: \n
    column: ${info.meta.column} \n
    line: ${info.meta.line} \n
    value: ${info.data.edit.value}`);
  }
}
</script>
