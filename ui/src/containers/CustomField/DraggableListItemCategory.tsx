import React from "react";
import {
  ActionTooltip,
  cbModal,
  Icon,
} from "@contentstack/venus-components";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Props } from "../../common/types";
import localeTexts from "../../common/locale/en-us";
import constants from "../../common/constants";
import DeleteModal from "./DeleteModal";
import rootConfig from "../../root_config";

const DraggableListItemCategory: React.FC<Props> = function ({
  product,
  remove,
  id,
  config,
  type,
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: product?.id || product?.productId || product?.code });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    border: isDragging ? constants.droppingDOMBorder : undefined,
    backgroundColor: isDragging ? constants.droppingDOMBackground : "inherit",
  };

  const getDeleteModal = (props: any) => (
    <DeleteModal
      type={"Product" || "Category"}
      remove={remove}
      id={id || product?.id}
      name={
        product?.name || product?.productName || product?.code || product?.id
      }
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );

  const onHoverActionList = [
    {
      label: <Icon icon="MoveIcon" size="mini" className="drag" />,
      title: localeTexts.customField.listActions.drag,
      action: () => { },
    },
    {
      label: <Icon icon="NewTab" size="mini" />,
      title: localeTexts.customField.listActions.openInConsole.replace(
        "$",
        rootConfig.ecommerceEnv.APP_ENG_NAME
      ),
      action: () =>
        window.open(rootConfig.getOpenerLink(id, config, "product"), "_blank"),
    },
    {
      label: <Icon icon="Trash" size="mini" />,
      title: localeTexts.customField.listActions.delete,
      action: () =>
        cbModal({
          component: getDeleteModal,
          modalProps: {
            onClose: () => { },
            size: "xsmall",
          },
        }),
      className: "ActionListItem--warning",
    },
  ];

  

  return (
    <div
      className="Table__body__row"
      style={style}
      ref={setNodeRef}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...attributes}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...listeners}
    >
      {isDragging ? (
        ""
      ) : (
        <ActionTooltip list={onHoverActionList}>
          <div role="cell" className="Table__body__column">
            {product?.name || product?.productName}
          </div>
          <div role="cell" className="Table__body__column">
            {type === "category" ? product?.id : product?.price}
          </div>
        </ActionTooltip>
      )}
    </div>
  );
};

export default DraggableListItemCategory;
