import { AbstractViewContribution, CommonMenus } from "@theia/core/lib/browser";
import { injectable } from "inversify";
import { FamilyTreeWidget } from "./family-tree-widget";
import { Command, CommandRegistry, MenuModelRegistry } from "@theia/core";

export const FamilyTreeWidgetCommand: Command = {
  id: "family-tree-widget:command"
};

@injectable()
export class FamilyTreeWidgetContribution extends AbstractViewContribution<FamilyTreeWidget> {

  constructor() {
    super({
      widgetId: FamilyTreeWidget.ID,
      widgetName: FamilyTreeWidget.LABEL,
      defaultWidgetOptions: { area: "left" },
      
      toggleCommandId: FamilyTreeWidgetCommand.id
    });
  }

  registerCommands(commands: CommandRegistry): void {
    commands.registerCommand(FamilyTreeWidgetCommand, {
      execute: () => super.openView({ activate: false, reveal: true })
    });
  }

  registerMenus(menus: MenuModelRegistry): void {
    super.registerMenus(menus);

    menus.registerMenuAction(CommonMenus.HELP, {
            commandId: FamilyTreeWidgetCommand.id,
            label: 'label'
        });



  }
}
