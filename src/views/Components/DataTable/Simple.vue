<template>
  <div>
    <example
      description="Smart editable user forms that automatically enable editable components for all content and call back the required data, greatly improving the user experience."
      title="DataTable(WIP)">
      <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        :loading="dataTableLoading"
        class="elevation-1"
      >
        <template v-slot:body="{ items, headers }">
          <tbody>
          <tr v-for="(item,idx) in items" :key="idx">
            <td v-for="(header,key) in headers" :key="key">
              <v-edit-dialog
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
